import { FC, useState, useRef } from 'react';
import styles from './Auth.module.scss'
import {SwitchTransition, CSSTransition} from "react-transition-group";
import cn from 'classnames'
import Link from "next/link";

const modes = ["out-in", "in-out"];
const Auth: FC = () => {
  const [isTab, setIsTab] = useState(true)
  const nodeRef = useRef(null)

  return (
        <CSSTransition
           in={isTab}

        >
        >
          <div className={styles.wrapper}>
            <div className={styles.form}>
              <ul className={styles.tabGroup}>
                <li className={cn( styles.tab, isTab && styles.active)} ref={nodeRef}>
                  <Link href="#signup" onClick={() => setIsTab(true)}>Зарегистрироваться</Link>
                </li>
                <li className={cn(styles.tab, !isTab && styles.active)} ref={nodeRef}>
                  <Link href="#login" onClick={() => setIsTab(false)}>Войти</Link>
                </li>
              </ul>

              <div className={styles.tabContent}>
                {isTab ? <div id="signup">
                      <h1>Sign Up for Free</h1>
                      <form action="/" method="post">
                        <div className="topRow">
                          <div className={styles.fieldWrap}>
                            <label>
                              First Name<span className="req">*</span>
                            </label>
                            <input type="text" required autoComplete="off" />
                          </div>
                          <div className={styles.fieldWrap}>
                            <label>
                              Last Name<span className="req">*</span>
                            </label>
                            <input type="text" required autoComplete="off" />
                          </div>
                        </div>
                        <div className={styles.fieldWrap}>
                          <label>
                            Email Address<span className="req">*</span>
                          </label>
                          <input type="email" required autoComplete="off" />
                        </div>
                        <div className={styles.fieldWrap}>
                          <label>
                            Set A Password<span className="req">*</span>
                          </label>
                          <input type="password" required autoComplete="off" />
                        </div>
                        <button type="submit" className="button button-block">
                          Get Started
                        </button>
                      </form>
                    </div> :
                    <div id="login">
                      <h1>Welcome Back!</h1>
                      <form action="/" method="post">
                        <div className={styles.fieldWrap}>
                          <label>
                            Email Address<span className="req">*</span>
                          </label>
                          <input type="email" required autoComplete="off" />
                        </div>
                        <div className={styles.fieldWrap}>
                          <label>
                            Password<span className="req">*</span>
                          </label>
                          <input type="password" required autoComplete="off" />
                        </div>
                        <p className="forgot">
                          <a href="#">Forgot Password?</a>
                        </p>
                        <button className="button button-block">Log In</button>
                      </form>
                    </div>}
              </div>

            </div>{" "}

          </div>
      </CSSTransition>
  )

};

export default Auth;
