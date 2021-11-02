import {useState} from "react";
// import Link from "next/link";
import Container from "@mui/material/Container";
import {Box} from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CancelIcon from '@mui/icons-material/Cancel';
import {FaDiscord} from "react-icons/fa";
import {Link} from 'react-scroll';
import {Typography} from "@mui/material";

function Navbar() {
    const [hide, showNav] = useState(true);

    const sidebarHandler = () => {
        showNav(!hide)
    }

    return (
        <Box>


        <Box sx={{
            backgroundColor: "#0B2100", width: "100%", display: "flex",
            justifyContent: "space-between",
            alignItems: "center", height: '90px',
            zIndex: 999,
            position: 'fixed',
            left: 0,
            top: 0,
        }}
        >
            <Container
                component="div"
                maxWidth="lg"
                id="container-nav"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box
                    component="div"
                    id="left-nav"
                    sx={{
                        py: 3,
                    }}
                >

                    <img id="logo" src="/pics/logoBabyDinose.png" alt="Logo"/>
                </Box>
                <Box
                    component="div"
                    id="right-nav"
                    sx={hide ? {
                        left: '-100%',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 999,
                    } : {
                        display: "flex",
                        height: '100%',
                        justifyContent: "center",
                        alignItems: "center",
                        py: 3,
                        left: 0,
                        zIndex: 999
                    }}
                >
                    <Box
                        component="div"
                        className="nav-menu"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                    <Link duration={500} className={'nav-link'} onClick={sidebarHandler} to={'home'} spy={true} activeClass={'active'}>
                            Home
                    </Link>

                        <Link duration={500} className={'nav-link'} onClick={sidebarHandler} to={'roadmap'} spy={true} activeClass={'active'}>
                            Roadmap
                        </Link>

                        <Link duration={500} className={'nav-link'} onClick={sidebarHandler} to={'faq'} spy={true} activeClass={'active'}>
                            Faq
                        </Link>

                        <Link  className={'nav-link'} onClick={sidebarHandler} to={'team'} spy={true} activeClass={'active'}>
                            Team
                        </Link>

                        {/*<a onClick={sidebarHandler } className={'active'} href="#roadmap">*/}
                        {/*  Roadmap*/}
                        {/*</a>*/}
                        {/*<a onClick={sidebarHandler} href="#faq">*/}
                        {/*    */}
                        {/*</a>*/}
                        {/*<a onClick={sidebarHandler} href="#team">*/}
                        {/*    Team*/}
                        {/*</a>*/}
                    </Box>
                    <Box
                        component="div"
                        className="social-icon"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            ml: 3,
                        }}
                    >
                        <a href="#">
                            <FaDiscord size={45} sx={{fontSize: 45}}/>
                        </a>
                        <a href="#">
                            <TwitterIcon sx={{fontSize: 45}}/>
                        </a>
                    </Box>
                </Box>
                <Box component="div" className="res-nav">
                    {hide ? (
                        <DehazeIcon onClick={() => showNav(!hide)} sx={{fontSize: 45, color: "white", mr: 1}}/>
                    ) : (
                        <CancelIcon onClick={() => showNav(!hide)} sx={{fontSize: 45, color: "white", mr: 1}}/>
                    )}
                </Box>
            </Container>
        </Box>
        </Box>
    );
}

export default Navbar;
