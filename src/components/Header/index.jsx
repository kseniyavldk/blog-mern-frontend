import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "./Header.module.scss";
import Container from "@mui/material/Container";
import { logout, selectIsAuth } from "../../redux/slices/auth";

export const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm('Are you sure you want to log')){
      dispatch(logout());
      window.localStorage.removeItem('token', '');
    }
    
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>NUNCI BLOG</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/add-post">
                  <Button variant="contained">To write an article</Button>
                </Link>
                <Button
                  onClick={onClickLogout}
                  variant="contained"
                  color="error"
                >
                  Go out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Sign in</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Create an account</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
