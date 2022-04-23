import React from 'react';

/** This porps for Button
 * 	@param children: React.ReactNode;
 *  @param fullWidth?: boolean;
 *  @param className?: string;
 *  @param variant?: "solid" | "outline" | "ghost";
 *  @param size?: "sm" | "md" | "lg";
 *  @param as?: string;
 *  @param isExternal?: boolean;
 *  @param type?: "button" | "submit" | "reset";
 */

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef(
	(
		{
			children,
			variant = 'solid',
			size = 'md',
			fullWidth = false,
			className,
			as = 'button',
			isExternal = false,
			...rest
		},
		ref
	) => {
		let tempClassNames = [];
		const sharedClasses = [
			'capitalize',
			'focus:outline-none',
			'focus:ring-2',
			'focus:ring-indigo-400',
			'focus:ring-offset-2',
			'focus:ring-offset-indigo-50',
			'font-semibold',
			'rounded-full',
			'inline-flex',
			'flex-shrink-0',
			'items-center',
			'justify-center',
			'transition-colors',
			'ease-in-out',
			'duration-500',
		];
		if (fullWidth) sharedClasses.push('w-full');

		// handle variants
		const btnSolid = ['bg-indigo-600', 'hover:bg-indigo-700', 'text-white'];
		const btnOutline = [
			'dark:text-white',
			'hover:text-indigo-700',
			'hover:dark:text-indigo-700',
			'bg-transparent',
			'hover:bg-indigo-50',
			'border',
			'border-indigo-600',
		];
		const btnGhost = [
			'bg-transparent',
			'dark:text-white',
			'hover:bg-indigo-50',
			'hover:text-indigo-700',
			'hover:dark:text-indigo-700',
		];

		if (variant === 'solid') {
			tempClassNames = [...sharedClasses, ...btnSolid];
		} else if (variant === 'outline') {
			tempClassNames = [...sharedClasses, ...btnOutline];
		} else if (variant === 'ghost') {
			tempClassNames = [...sharedClasses, ...btnGhost];
		}

		// handle sizes
		const sizeSm = ['h-8', 'px-2', 'text-sm'];
		const sizeMd = ['h-10', 'px-3'];
		const sizeLg = ['h-12', 'px-4', 'text-lg'];

		if (size === 'sm') {
			tempClassNames = [...tempClassNames, ...sizeSm];
		} else if (size === 'md') {
			tempClassNames = [...tempClassNames, ...sizeMd];
		} else if (size === 'lg') {
			tempClassNames = [...tempClassNames, ...sizeLg];
		}

		const classes = tempClassNames.join(' ');

		const Element = as ? (
			React.createElement(
				as,
				{
					className: `${classes} ${className}`,
					target: isExternal ? '_blank' : undefined,
					rel: isExternal ? 'noopener noreferrer' : undefined,
					ref,
					...rest,
				},
				children
			)
		) : (
			<button {...rest} className={`${classes} ${className}`} ref={ref}>
				{children}
			</button>
		);

		return Element;
	}
);

/** This porps for IconButton. Also inherits Button props
 * 	@param icon?: React.ReactElement;
 *  @param "aria-label": string;
 */

// eslint-disable-next-line react/display-name
export const IconButton = React.forwardRef(
	(
		{
			children,
			icon,
			className,
			'aria-label': ariaLabel,
			size = 'md',
			...rest
		},
		ref
	) => {
		let sharedClasses = ['rounded-full', '!px-0'];
		// handle sizes
		const sizeSm = ['w-8'];
		const sizeMd = ['w-10'];
		const sizeLg = ['w-12'];

		if (size === 'sm') {
			sharedClasses = [...sharedClasses, ...sizeSm];
		} else if (size === 'md') {
			sharedClasses = [...sharedClasses, ...sizeMd];
		} else if (size === 'lg') {
			sharedClasses = [...sharedClasses, ...sizeLg];
		}

		/**
		 * Passing the icon as prop or children should work
		 */
		const element = icon || children;
		const _children = React.isValidElement(element)
			? React.cloneElement(element, {
					'aria-hidden': true,
					focusable: false,
			  })
			: null;

		const classes = sharedClasses.join(' ');
		return (
			<Button
				className={`${classes} ${className}`}
				aria-label={ariaLabel}
				size={size}
				{...rest}
				ref={ref}
			>
				{_children}
			</Button>
		);
	}
);
