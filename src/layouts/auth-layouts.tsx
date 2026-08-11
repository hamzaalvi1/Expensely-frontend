import { Grid } from "../components/grid";
import { GridItem } from "../components/grid-item";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Grid
      gap="none"
      style={{ height: "100vh", gridTemplateColumns: "40% 60%" }}
    >
      <GridItem>testing</GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default AuthLayout;
