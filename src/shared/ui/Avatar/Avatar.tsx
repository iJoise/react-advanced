import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
	className?: string;
	src?: string;
	size?: number;
	alt?: string;
}

export const Avatar = ({
	className,
	src,
	size,
	alt,
	...rest
}: AvatarProps) => {
	const mods: Mods = {};

	return (
		<img
			className={classNames(cls.Avatar, mods, [className])}
			src={src}
			alt={alt}
			width={size || 100}
			height={size || 100}
			{...rest}
		/>
	);
};
