import { useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQ() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box id={'faq'} className="FAQ" sx={{ position: "relative", width: "100%" }}>
        <img src="pics/background-faq.png" alt="" />

        <Container
          component="div"
          maxWidth="lg"
          id="container-Faq"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: "900", color: "#FFFCF8", mb: 1 }}
            component="div"
            gutterBottom
          >
            FAQ
          </Typography>
          <Box component="div">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{backgroundColor:'#E9E1DB'}}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{fontSize:35,color:'black'}} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography variant="h6" sx={{width: '70%',flexShrink: 0,color:'black', fontWeight:900}}>
                Who are the Baby Dinos?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{color:'black',}} >
                They are 10.000 algorithmically generated supercute Baby Dinosaurs stored on the Solana blockchain. There are over 240 atributes in 7 categories, which gives millions of unique combinations. Since only 10.000 are being minted, some are more unique and rare than others.  
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{backgroundColor:'#E9E1DB'}}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{fontSize:35,color:'black'}} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography variant="h6" sx={{width: '70%',flexShrink: 0,color:'black', fontWeight:900}}>
                When is the Launch?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{color:'black',}} >
                They are 10.000 algorithmically generated supercute Baby Dinosaurs stored on the Solana blockchain. There are over 240 atributes in 7 categories, which gives millions of unique combinations. Since only 10.000 are being minted, some are more unique and rare than others.  
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              sx={{backgroundColor:'#E9E1DB'}}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{fontSize:35,color:'black'}} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography variant="h6" sx={{width: '70%',flexShrink: 0,color:'black', fontWeight:900}}>
                How much does it cost to mint Baby Dino?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{color:'black',}} >
                They are 10.000 algorithmically generated supercute Baby Dinosaurs stored on the Solana blockchain. There are over 240 atributes in 7 categories, which gives millions of unique combinations. Since only 10.000 are being minted, some are more unique and rare than others.  
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              sx={{backgroundColor:'#E9E1DB'}}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{fontSize:35,color:'black'}} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography variant="h6" sx={{width: '70%',flexShrink: 0,color:'black', fontWeight:900}}>
                What wallet will I need?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{color:'black',}} >
                They are 10.000 algorithmically generated supercute Baby Dinosaurs stored on the Solana blockchain. There are over 240 atributes in 7 categories, which gives millions of unique combinations. Since only 10.000 are being minted, some are more unique and rare than others.  
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
              sx={{backgroundColor:'#E9E1DB'}}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{fontSize:35,color:'black'}} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography variant="h6" sx={{width: '70%',flexShrink: 0,color:'black', fontWeight:900}}>
                When will I get my Baby Dino after the mint?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{color:'black',}} >
                They are 10.000 algorithmically generated supercute Baby Dinosaurs stored on the Solana blockchain. There are over 240 atributes in 7 categories, which gives millions of unique combinations. Since only 10.000 are being minted, some are more unique and rare than others.  
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
              sx={{backgroundColor:'#E9E1DB'}}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{fontSize:35,color:'black'}} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography variant="h6" sx={{width: '70%',flexShrink: 0,color:'black', fontWeight:900}}>
                Will there be royalties?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{color:'black',}} >
                They are 10.000 algorithmically generated supercute Baby Dinosaurs stored on the Solana blockchain. There are over 240 atributes in 7 categories, which gives millions of unique combinations. Since only 10.000 are being minted, some are more unique and rare than others.  
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default FAQ;
