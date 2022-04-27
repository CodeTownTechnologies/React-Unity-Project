import Box from "@mui/material/Box";
import SelectInput from "components/Select/selectInput";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const KycComponent = () => {
  return (
    <Box>
      <p
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          textAlign: "center",
          alignSelf: "left",
        }}
      >
        My Documents
      </p>
      <Box
        sx={{
          justifyContent: "center",
          width: 1100,
          height: 150,
          borderRadius: "8px",
          backgroundColor: "#1E2128",
          margin: "auto",
          marginTop: "40px",
        }}
      >
        <p
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          No documents Uploaded
        </p>
      </Box>
      <p
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          textAlign: "center",
          alignSelf: "left",
        }}
      >
        Upload New Documents
      </p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            // height: "350px",

            backgroundColor: "#1E2128",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "80px",
                width: "60%",

                backgroundColor: "#1E2128",
                borderRadius: "8px",
              }}
            >
              <SelectInput />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "80px",
                width: "40%",

                backgroundColor: "#1E2128",
                borderRadius: "8px",
              }}
            >
              <SelectInput />
            </Box>
          </Box>
          <Stack spacing={25} direction="row" justifyContent="center">
            <Button variant="contained">Front Side</Button>
            <Button variant="contained">Back Side</Button>
          </Stack>



          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
             
              height:"100px",
              marginLeft:"70px",
              marginRight:"70px"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border:"1px solid grey",
                height:"70px",
                width:"380px",
                borderRadius:"20px"

              }}
            >
              <p>Upload Documnets</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border:"1px solid grey",
                height:"70px",
                width:"380px",
                borderRadius:"20px"
              }}
            >
               <p>Upload Documnets</p>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "80px",
                width: "60%",

                backgroundColor: "#1E2128",
                borderRadius: "8px",
              }}
            >
              <SelectInput />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "80px",
                width: "40%",

                backgroundColor: "#1E2128",
                borderRadius: "8px",
              }}
            >
              <SelectInput />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "80px",
                width: "60%",

                backgroundColor: "#1E2128",
                borderRadius: "8px",
              }}
            >
              <SelectInput />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "80px",
                width: "40%",

                backgroundColor: "#1E2128",
                borderRadius: "8px",
              }}
            >
              <SelectInput />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "80px",
                width: "60%",

                backgroundColor: "#1E2128",
                borderRadius: "8px",
              }}
            >
             
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "80px",
                width: "40%",

                backgroundColor: "#1E2128",
                borderRadius: "8px",
              }}
            >
              <Button variant="contained">Save</Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "Column",
            width: "25%",
            height: "350px",
            border: "1px solid red",
            backgroundColor: "#1E2128",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              justifyContent: "center",
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Upload New Documents
          </p>
        </Box>
      </Box>
      <p
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          textAlign: "center",
          alignSelf: "left",
        }}
      >
        Uploaded Documents
      </p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          border: "1px solid red",
          height: "400px",
          backgroundColor: "#1E2128",
          borderRadius: "8px",
        }}
      ></Box>
    </Box>
  );
};

export default KycComponent;
