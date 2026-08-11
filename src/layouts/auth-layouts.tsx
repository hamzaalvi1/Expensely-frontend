import { Grid } from "../components/grid";
import { GridItem } from "../components/grid-item";
import { Outlet } from "react-router-dom";
import LeftSection from "../features/auth/left-section";

const AuthLayout = () => {
  return (
    <Grid
      gap="none"
      style={{ height: "100vh", gridTemplateColumns: "40% 60%" }}
    >
      <GridItem>
        <LeftSection />
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default AuthLayout;
