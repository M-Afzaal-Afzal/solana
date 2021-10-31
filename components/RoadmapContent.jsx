import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

function RoadmapContent(props) {
    return (
        <Box
          key={props.id}
          className="roadmap-content"
          component="div"
          sx={{
            mt: 4,
          }}
        >
          <Box
            className="step"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              className="content-left"
              component="div"
              sx={{ width: "20%", position: "relative" }}
            >
              <Box
                className="egg"
                component="div"
                sx={{
                  width: "70px",
                  position: "relative",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  ml: 2,
                }}
              >
                <img src={props.URL} alt="" />
                <Typography
                  className="egg-title"
                  variant="h6"
                  sx={{
                    color: "#282020",
                    fontWeight: 900,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                  component="div"
                  gutterBottom
                >
                  {props.title}
                </Typography>
              </Box>
            </Box>
            <Box className="content-right" component="div" sx={{width:'80%'}}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "700", color: "#DDCFC3", mb: 1 }}
                component="div"
                gutterBottom
              >
                {props.query}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#DDCFC3", mb: 1 }}
                component="div"
                gutterBottom
              >
                {props.answer}
              </Typography>
            </Box>
          </Box>
        </Box>
    )
}

export default RoadmapContent
