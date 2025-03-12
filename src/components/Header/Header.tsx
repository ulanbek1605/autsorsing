"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./header.css";
import { usePathname } from "next/navigation";

export default function Header() {
	const headerRef = useRef<null | HTMLElement>(null)
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathName = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (!headerRef.current || !isOpen) return
		const hanldeClick = (e: MouseEvent): void => {
			const target = e.target as HTMLDivElement
			if (!headerRef.current?.contains(target)) {
				setIsOpen(prev => !prev)
			}
		}
		document.addEventListener('click', hanldeClick)
		return () => {
			document.removeEventListener('click', hanldeClick)
		}
	}, [isOpen])



	return (
		<>
			<header ref={headerRef} className={`header ${scrolled ? "scrolled" : ""}`}>
				<div className="container">
					<div className="logo">Чериков и партнеры</div>
					<nav className={`nav ${isOpen ? "open" : ""}`}>
						<Link href="/" className={pathName === '/' ? 'active' : ''} onClick={() => setIsOpen(false)}>
							Главная
						</Link>
						<Link href="/tariffs" className={pathName === '/tariffs' ? 'active' : ''} onClick={() => setIsOpen(false)}>
							Тарифы
						</Link>
						<Link href="/team" className={pathName === '/team' ? 'active' : ''} onClick={() => setIsOpen(false)}>
							Команда
						</Link>
						<Link href="/contacts" className={pathName === '/contacts' ? 'active' : ''} onClick={() => setIsOpen(false)}>
							Контакты
						</Link>
					</nav>
					<button
						className={`burger ${isOpen ? "open" : ""}`}
						onClick={toggleMenu}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</header>
		</>
	);
}