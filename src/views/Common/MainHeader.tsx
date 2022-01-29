import React, {PropsWithChildren, useState, useCallback} from 'react'
import {
    Button,
    Col,
    Container,
    DropdownButton,
    Dropdown,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
    Row
} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {FaSearch, FaLeaf, FaGlobeEurope} from "react-icons/fa";
import {Img} from "./Img";
import {useHistory} from 'react-router-dom';

export function MainHeader() {
    const history = useHistory();
    const {t, i18n} = useTranslation();
    const [lang, setLang] = useState("English");

    const changeLanguageHandler = (e: any) => {
        i18n.changeLanguage(e)
        if(e == "en") {
            setLang("English")
        } else if(e == "de"){
            setLang("Dutch")
        }
    }

    function handleDropdownOnClick(pathname: string, search: string) {
        if(search === "") {
            history.push({
                pathname: `/products/${pathname}`
            });
        } else {
            history.push({
                pathname: `/products/${pathname}`,
                search: `?name=${search}`
            });
        }
    }

    const [isMegaMenuOpen, setIsMegaMEnuOpen] = useState(false)

    return <Navbar style={{backgroundColor: "#222", fontSize: 16, height: 40}} fixed="top" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/te/home" className="text-custom">
                    <Img name={"logo/white/logo_white_32px.png"} imageWidth={20} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/home" className="nav-link text-custom">{t('mainHeader.home')}</Link>
                        <Link to="/about" className="nav-link text-custom">{t('mainHeader.aboutUs')}</Link>
                        {/*<Link to="/products/our-teas?tea_range=te-garden" className="nav-link text-custom product-dropdown">{t('mainHeader.products')}</Link>*/}
                        {/*<Link to="/retail" className="nav-link text-custom">{t('mainHeader.retail')}</Link>*/}
                        {/*<Link to="/blog" className="nav-link text-custom">{t('mainHeader.blog')}</Link>*/}
                        {/*<Link to="/contact-us" className="nav-link text-custom">{t('mainHeader.contactUs')}</Link>*/}

                        <li className="nav-item dropdown has-megamenu text-custom" id="basic-nav-dropdown">
                            <a className="nav-link dropdown-toggle" id="basic-nav-dropdown" href="/te/products" data-bs-toggle="dropdown">{t('mainHeader.products')}</a>
                            <div className="dropdown-menu megamenu" role="menu">
                                <Container className=" pt-0 mt-0">
                                    <div className="row text-left">
                                        <div className="col-md-3">
                                            <Dropdown.Header>
                                                <div className="product-dropdown">
                                                    <FaLeaf
                                                        color="#6c757d"
                                                        size="16px"
                                                        className="product-icon"
                                                    />
                                                    {"  "}
                                                    <span style={{cursor: 'pointer', fontSize: '16px'}}
                                                        onClick={() => handleDropdownOnClick("te-garden", "")}>
                                                    {t('mainHeader.productCat.garden.title')}
                                                </span>
                                                </div>
                                            </Dropdown.Header>
                                            <Dropdown.Item style={{cursor: 'unset'}}>
                                                <div className="product-dropdown">
                                                <span className="text-underline"
                                                      onClick={() => handleDropdownOnClick("te-garden/tea-range", "estate")}>
                                                    {t('mainHeader.productCat.garden.catOne')}
                                                </span>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item style={{cursor: 'unset'}}>
                                                <div className="product-dropdown">
                                                <span className="text-underline"
                                                      onClick={() => handleDropdownOnClick("te-garden/tea-range", "region")}>
                                                    {t('mainHeader.productCat.garden.catTwo')}
                                                </span>
                                                </div>
                                            </Dropdown.Item>
                                        </div>
                                        <div className="col-md-3">
                                            <Dropdown.Header>
                                                <div className="product-dropdown">
                                                    <FaLeaf
                                                        color="#6c757d"
                                                        size="16px"
                                                        className="product-icon"
                                                    />
                                                    {"  "}
                                                    <span style={{cursor: 'pointer', fontSize: '16px'}}
                                                          onClick={() => handleDropdownOnClick("te-garden", "")}>
                                                    {t('mainHeader.productCat.garden.title')}
                                                </span>
                                                </div>
                                            </Dropdown.Header>
                                            <Dropdown.Item style={{cursor: 'unset'}}>
                                                <div className="product-dropdown">
                                                <span className="text-underline"
                                                      onClick={() => handleDropdownOnClick("te-garden/tea-range", "estate")}>
                                                    {t('mainHeader.productCat.garden.catOne')}
                                                </span>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item style={{cursor: 'unset'}}>
                                                <div className="product-dropdown">
                                                <span className="text-underline"
                                                      onClick={() => handleDropdownOnClick("te-garden/tea-range", "region")}>
                                                    {t('mainHeader.productCat.garden.catTwo')}
                                                </span>
                                                </div>
                                            </Dropdown.Item>
                                        </div>
                                        <div className="col-md-3">
                                            <Dropdown.Header>
                                                <div className="product-dropdown">
                                                    <FaLeaf
                                                        color="#6c757d"
                                                        size="16px"
                                                        className="product-icon"
                                                    />
                                                    {"  "}
                                                    <span style={{cursor: 'pointer', fontSize: '16px'}}
                                                          onClick={() => handleDropdownOnClick("te-garden", "")}>
                                                    {t('mainHeader.productCat.garden.title')}
                                                </span>
                                                </div>
                                            </Dropdown.Header>
                                            <Dropdown.Item style={{cursor: 'unset'}}>
                                                <div className="product-dropdown">
                                                <span className="text-underline"
                                                      onClick={() => handleDropdownOnClick("te-garden/tea-range", "estate")}>
                                                    {t('mainHeader.productCat.garden.catOne')}
                                                </span>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item style={{cursor: 'unset'}}>
                                                <div className="product-dropdown">
                                                <span className="text-underline"
                                                      onClick={() => handleDropdownOnClick("te-garden/tea-range", "region")}>
                                                    {t('mainHeader.productCat.garden.catTwo')}
                                                </span>
                                                </div>
                                            </Dropdown.Item>
                                        </div>
                                        <div className="col-md-3">
                                            <Dropdown.Header>
                                                <div className="product-dropdown">
                                                    <FaLeaf
                                                        color="#6c757d"
                                                        size="16px"
                                                        className="product-icon"
                                                    />
                                                    {"  "}
                                                    <span style={{cursor: 'pointer', fontSize: '16px'}}
                                                          onClick={() => handleDropdownOnClick("te-garden", "")}>
                                                    {t('mainHeader.productCat.garden.title')}
                                                </span>
                                                </div>
                                            </Dropdown.Header>
                                            <Dropdown.Item style={{cursor: 'unset'}}>
                                                <div className="product-dropdown">
                                                <span className="text-underline"
                                                      onClick={() => handleDropdownOnClick("te-garden/tea-range", "estate")}>
                                                    {t('mainHeader.productCat.garden.catOne')}
                                                </span>
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item style={{cursor: 'unset'}}>
                                                <div className="product-dropdown">
                                                <span className="text-underline"
                                                      onClick={() => handleDropdownOnClick("te-garden/tea-range", "region")}>
                                                    {t('mainHeader.productCat.garden.catTwo')}
                                                </span>
                                                </div>
                                            </Dropdown.Item>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </li>
                        <Link to="/contact-us" className="nav-link text-custom">{t('header.contactUs')}</Link>
                    </Nav>
                    <Form className="d-flex" style={{ height: 25, fontSize: 16,}}>
                        <div className="search-icon">
                            <FaSearch className="text-custom" style={{color: "#909782",fontSize: 16 }}>Search</FaSearch>
                        </div>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2 text-custom"
                            aria-label="Search"
                            style={{ backgroundColor: '#000000', border: 0, paddingLeft: 5, fontSize: 12, color: "#909782"}}
                        />
                    </Form>
                    <NavDropdown title={<span style={{color: "#909782"}}><FaGlobeEurope style={{marginRight: 5, color: "#909782"}}/>{lang}</span>}
                                 style={{color: "#909782", width: 100}}
                                 onSelect={(e: any) => changeLanguageHandler(e)}
                                 renderMenuOnMount={true}
                                 id="basic-nav-dropdown" className="text-custom">
                        <NavDropdown.Item className="lang-item" eventKey={"en"}>
                            <span className="text-underline">English</span></NavDropdown.Item>
                        <NavDropdown.Item className="lang-item" eventKey={"de"}>
                            <span className="text-underline">Dutch</span></NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
}