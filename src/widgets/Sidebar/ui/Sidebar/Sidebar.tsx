import { classNames } from 'shared/lib/classNames';
import cls from './Sidebar.module.scss';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarPropsType {
	className?: string
}

export const Sidebar = ({ className }: SidebarPropsType) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => setCollapsed(prev => !prev)

	return (
		<div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<button onClick={onToggle}>toggle</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang}/>
			</div>
		</div>
	)
}