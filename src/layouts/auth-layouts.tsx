import { Outlet } from "react-router-dom";
import LeftSection from "../features/auth/left-section";
import { Grid } from "@mantine/core";

const AuthLayout = () => {
  return (
    <Grid gap={0} h={"100dvh"} styles={{ inner: { height: "100%" } }}>
      <Grid.Col span={5}>
        <LeftSection />
      </Grid.Col>
      <Grid.Col span={7}>
        <Outlet />
      </Grid.Col>
    </Grid>
  );
};

export default AuthLayout;
