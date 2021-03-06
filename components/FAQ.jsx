import { useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from 'next/image';

function FAQ() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      id: 1,
      heading: `Who are the Baby Dinos?`,
      description: `They are 10.000 algorithmically generated supercute Baby Dinosaurs stored on the Solana blockchain. There are over 240 atributes in 7 categories, which gives millions of unique combinations. Since only 10.000 are being minted, some are more unique and rare than others.`
    },
    {
      id: 2,
      heading: ` When is the Launch?`,
      description: `Launch date will be announced soon.`
    },{
      id: 3,
      heading: `How much does it cost to mint Baby Dino?`,
      description: `Each Dino will be sold at fair and affordable price.`
    },{
      id: 4,
      heading: `What wallet will I need?`,
      description:`You will need Phantom or Sollet.`
    },{
      id: 5,
      heading: `When will I get my Baby Dino after the mint?`,
      description:`Your Dino will be sent to your wallet right after the minting process. It might take a few minutes.`
    },
    {
      id: 6,
      heading: `Will there be royalties?`,
      description:`5% royalties will be applied to all the resales. `
    }
  ]

  return (
    <>
      <Box id={'faq'} className="FAQ" sx={{ position: "relative", width: "100%",py: '6rem' }}>
        <Image sx={{
            zIndex: -1,
        }} layout={'fill'} objectFit={'cover'} src="/pics/background-faq.png" alt="Background" />

        <Container
          component="div"
          maxWidth="lg"
          id="container-Faq"
          sx={{
            // position: "absolute",
              zIndex: 5,
              position: 'relative',

          }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: "900", color: "#FFFCF8", mb: 1,
              fontFamily: `'Paytone One', sans-serif`,
              letterSpacing:1,
            }}
            component="div"
            gutterBottom
          >
            FAQ
          </Typography>
          <Box component="div">

            {
              faqs.map(({id,heading,description}) => (

                  <Accordion
                      key={id}
                      expanded={expanded === `panel${id}`}
                      onChange={handleChange(`panel${id}`)}
                      sx={{backgroundColor:'#E9E1DB',my: '8px',borderRadius: '16px',
                        '&.MuiAccordion-root:first-of-type' :{
                          borderRadius: '16px',
                        },'&.MuiAccordion-root:last-of-type' :{
                          borderRadius: '16px',
                        },
                        '&.Mui-expanded' :{
                        my: 0,
                        }
                      }}
                  >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{fontSize:35,color:'black'}} />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                      <Typography variant="h6" sx={{
                          width:'100%',
                        fontFamily: `'Paytone One', sans-serif`,
                        letterSpacing:1,
                        flexShrink: 0,color:'black', fontWeight:900}}>
                        {heading}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body1" sx={{color:'black',
                        fontFamily: `'Play', sans-serif`,
                      }} >
                        {description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
              ))
            }

          </Box>
        </Container>
      </Box>
    </>
  );
}

export default FAQ;
