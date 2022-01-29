import React, {PropsWithChildren, useState} from 'react'
import {Img} from "./Img";
import {Container, DropdownButton, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

export function Header() {
    const {t, i18n} = useTranslation();
    const [lang, setLang] = useState("lang/en.png");

    const changeLanguageHandler = (e: any) => {
        i18n.changeLanguage(e)
        setLang(`${e}.png`)
    }

    return <>
        <Navbar style={{backgroundColor: "transparent !important", zIndex: 1, marginTop: 30}}  variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft: '3%'}}>
                    <Nav className="me-auto">
                        <Link to="/contact-us" className="nav-link text-custom">{t('header.contactUs')}</Link>
                    </Nav>
                    <Nav>
                        <NavDropdown className="pull-right" id="language-dropdown"
                                     align="end"
                                     title={
                                         <div className="pull-right">
                                             <Img name={lang}
                                                  imageWidth={30}
                                             />
                                         </div>
                                     }
                                     onSelect={(e: any) => changeLanguageHandler(e)}
                        >
                            <NavDropdown.Item eventKey={"en"}> <Img name="lang/en.png" imageWidth={30} /> {t('header.lang.en')}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey={"de"}> <Img name="lang/de.png" imageWidth={30} /> {t('header.lang.de')}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
}