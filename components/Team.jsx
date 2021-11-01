import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

function Team() {
  return (
    <Box id={'team'}>
      <Box
        className="team"
        sx={{
          backgroundColor: "#277B00",
          width: "100%",
          minHeight: "90vh",
          py: 8,
          // marginTop: "-5px",
        }}
      >
        <Container
          component="div"
          maxWidth="lg"
          id="container-Team"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: "900", color: "#FFFCF8", mb: 7,
                fontFamily: `'Paytone One', sans-serif`,
                letterSpacing: 1,
            }}
            component="div"
            gutterBottom
          >
            The Team
          </Typography>
          <Box
            className="cards"
            component="div"
            sx={{textAlign: "center",display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",p:3 }}
          >
            <Box
              className="card"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                  m: {
                      xs: 0,
                      md: 3,
                  }
              }}
            >
              <Box className="card-img" component="div" sx={{ width: "150px" }}>
                <img src="pics/team/1.png" alt="" />
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: "900", color: "#DDCFC3", mb: 1,
                    fontFamily: `'Paytone One', sans-serif`,
                    letterSpacing: 1,

                }}
                component="div"
                gutterBottom
              >
                DinoMama
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#DDCFC3", mb: 1,
                    fontFamily: `'Play', sans-serif`,

                }}
                component="div"
                gutterBottom
              >
                Our visionary and passionate leader. Taking care of all of the
                Baby Dinos before they are adopted. Nature lover who wants to
                give back.
              </Typography>
            </Box>
            {/* 2 */}
            <Box
              className="card"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                  m: {
                      xs: 0,
                      md: 3,
                  }
              }}
            >
              <Box className="card-img" component="div" sx={{ width: "150px" }}>
                <img src="pics/team/2.png" alt="" />
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: "900", color: "#DDCFC3", mb: 1,
                    fontFamily: `'Paytone One', sans-serif`,
                    letterSpacing: 1,

                }}
                component="div"
                gutterBottom
              >
                DinoAnn
              </Typography>
              <Typography
                variant="body1"
                sx={{color: "#DDCFC3", mb: 1,
                    fontFamily: `'Play', sans-serif`,
                }}
                component="div"
                gutterBottom
              >
                Our amazing artist and illustrator, who gave live to all of the Baby Dinos. 
              </Typography>
            </Box>
            {/* 3 */}
             <Box
              className="card"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                  m: {
                      xs: 0,
                      md: 3,
                  }
              }}
            >
              <Box className="card-img" component="div" sx={{ width: "150px" }}>
                <img src="pics/team/3.png" alt="" />
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: "900", color: "#DDCFC3", mb: 1,
                    fontFamily: `'Paytone One', sans-serif`,
                    letterSpacing: 1,
                }}
                component="div"
                gutterBottom
              >
                DinoElla
              </Typography>
              <Typography
                variant="body1"
                sx={{color: "#DDCFC3", mb: 1,
                    fontFamily: `'Play', sans-serif`,
                }}
                component="div"
                gutterBottom
              >
                Our social media expert, who rocks the Twitter like nobody else. Animal lover and enviromental enthusiast.
              </Typography>
            </Box>
            {/* 4 */}
            <Box
              className="card"
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                m: {
                    xs: 0,
                    md: 3,
                }
              }}
            >
              <Box className="card-img" component="div" sx={{ width: "150px" }}>
                <img src="pics/team/4.png" alt="" />
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: "900", color: "#DDCFC3", mb: 1,
                    fontFamily: `'Paytone One', sans-serif`,
                    letterSpacing: 1,
                }}
                component="div"
                gutterBottom
              >
                DinoPete
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#DDCFC3", mb: 1,
                    fontFamily: `'Play', sans-serif`,
                }}
                component="div"
                gutterBottom
              >
                Our lead developer and coding king. Thanks to him the Dinos can find new home.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Team;
