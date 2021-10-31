import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <>
      <Box
        className="Footer"
        sx={{ width: "100%", backgroundColor: "#103300",height:'200px',marginTop:'-5px' }}
      >
          <Container
          component="div"
          maxWidth="lg"
          id="container-Faq"
          sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              height:'100%',
              textAlign:'center'
          }}
        >
            <Typography
            variant="h5"
            sx={{ fontWeight: "700", color: "#E9E1DB", py:5 }}
            component="div"
            gutterBottom
          >
            Thank you for being part of our community and thank you for choosing to give back with us!
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
