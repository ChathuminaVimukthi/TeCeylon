import React, {PropsWithChildren, useState} from 'react'
import {Container, DropdownButton, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {Img} from "./Img";

export function SideNavBar() {
    const {t, i18n} = useTranslation();
    const [lang, setLang] = useState("lang/en.png");

    const changeLanguageHandler = (e: any) => {
        i18n.changeLanguage(e)
        setLang(`lang/${e}.png`)
    }

    return <Navbar style={{zIndex: 101, backgroundColor: "#000000"}} fixed="top" variant="dark" expand={"lg"}>
        <Container fluid>
            <Navbar.Brand href="/home" className="text-custom">Té Ceylon</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Té Ceylon</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav className="me-auto">
                            <Link to="/home" className="nav-link text-custom">{t('mainHeader.online')}</Link>
                            <hr style={{margin: 0, width: "50vw"}}/>
                            <Link to="/about" className="nav-link text-custom">{t('mainHeader.retail')}</Link>
                            <hr style={{margin: 0, width: "50vw"}}/>
                            <Link to="/products" className="nav-link text-custom">{t('mainHeader.blog')}</Link>
                            <hr style={{margin: 0, width: "50vw"}}/>
                        </Nav>

                        <br/>

                        <Nav className="me-auto">
                            <Link to="/home" className="nav-link text-custom">{t('header.home')}</Link>
                            <hr style={{margin: 0, width: "50vw"}}/>
                            <Link to="/about" className="nav-link text-custom">{t('header.aboutUs')}</Link>
                            <hr style={{margin: 0, width: "50vw"}}/>
                            <Link to="/products" className="nav-link text-custom">{t('header.products')}</Link>
                            <hr style={{margin: 0, width: "50vw"}}/>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Language" id="offcanvasNavbarDropdown" onSelect={(e: any) => changeLanguageHandler(e)}>
                                <NavDropdown.Item eventKey={"en"}> <Img name="lang/en.png" imageWidth={30} /> {t('header.lang.en')}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey={"de"}> <Img name="lang/de.png" imageWidth={30} /> {t('header.lang.de')}</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <hr style={{margin: 0, width: "50vw"}}/>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
}