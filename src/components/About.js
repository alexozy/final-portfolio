import React from 'react';
import Me from "../assets/me.jpeg";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function Profile() {
  return (
    <div className="vh-100" style={{ backgroundColor: '#793F68' }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src={Me}
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Meet Ozanne Alexander</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  welcome! my name is ozanne and i'm a bootcamp grad. 
                  please feel free to hop around 
                 
                </MDBCardText>
                <MDBCardText className="text-muted mb-4">
                  my portfolio and send me a message if you'd like
                  to work with me on any interesting projects!
                </MDBCardText>
               
                <MDBBtn rounded size="lg" href=" ">
                  Contact Me
                </MDBBtn>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">8471</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Life Points</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">500</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">Pending...</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Total Projects</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}