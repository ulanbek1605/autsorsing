"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./header.css";
import { usePathname } from "next/navigation";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathName = usePathname()
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<header className={`header ${scrolled ? "scrolled" : ""}`}>
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
						onClick={() => setIsOpen(!isOpen)}
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