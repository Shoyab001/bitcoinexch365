import React from "react";
import "./main.css";
import { Row, Col, Container, Tab, Tabs } from "react-bootstrap";

const mainindex = () => {
  return (
    <div>
      <Container>
        <h2 className="tab App">How to use Bitcoinexch365</h2>

        <Row>
          <Col>
            <Row style={{ justifyContent: "center" }}>
              <img
                src="/job.png"
                className="Rowimg01"
                alt="photo" 
              ></img>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <img
                src="/bitcoin.png"
                className="Rowimg01"
                alt="photo"
              ></img>
            </Row>
          </Col>
          <Col style={{ margin: "20px 0px 20px" }}>
            <div className="titlecol2">
              <h1>Inform yourself</h1>
              <p>
                Bitcoin is different than what you know and use every day.
                Before you start using Bitcoin, there are a few things that you
                need to know in order to use it securely and avoid common
                pitfalls.
              </p>
              <a href="" className="btnleft">
                Read More
              </a>
            </div>
            <hr />
            <div className="titlecol2">
              <h1>Choose your wallet</h1>
              <p>
                Free bitcoin wallets are available for all major operating
                systems and devices to serve a variety of your needs. For
                example, you can install an app on your mobile device for
                everyday use or you can have a wallet only for online payments
                on your computer. In any case, choosing a wallet is easy and can
                be done in minutes.
              </p>
              <a href="" className="btnleft">
                Choose your wallet
              </a>
            </div>
            <hr />
            <div className="titlecol2">
              <h1>Get Bitcoin</h1>
              <p>
                You can get Bitcoin by accepting it as a payment for goods and
                services. There are also several ways you can buy Bitcoin.
              </p>
              <a href="" className="btnleft">
                Buy Bitcoin
              </a>
            </div>
            <hr />
            <div className="titlecol2">
              <h1>Spend Bitcoin</h1>
              <p>
                There are a growing number of services and merchants accepting
                Bitcoin all over the world. Use Bitcoin to pay them and rate
                your experience to help them gain more visibility.
              </p>
              <a href="" className="btnleft">
                Find merchants and products
              </a>
            </div>
          </Col>
        </Row>

        <h2 className="tab App">How to accept Bitcoinexch365</h2>

        <Row>
          <Col style={{ margin: "20px 0px 20px" }}>
            <div className="titlecol">
              <h1>Inform yourself</h1>
              <p>
                Bitcoin does not require merchants to change their habits.
                However, Bitcoin is different than what you know and use every
                day. Before you start using Bitcoin, there are a few things that
                you need to know in order to use it securely and avoid common
                pitfalls.
              </p>
              <a href="" className="btnleft">
                Read More
              </a>
            </div>
            <hr />
            <div className="titlecol">
              <h1>Processing payments</h1>
              <p>
                You can process payments and invoices by yourself or you can use
                merchant services and deposit money in your local currency or
                bitcoins. Most point of sales businesses use a tablet or a
                mobile phone to let customers pay with their mobile phones.
              </p>
              <a href="" className="btnleft">
                Find merchant services
              </a>
            </div>

            <hr />
            <div className="titlecol">
              <h1>Accounting and taxes</h1>
              <p>
                Merchants often deposit and display prices in their local
                currency. In other cases, Bitcoin works similarly to a foreign
                currency. To get appropriate guidance regarding tax compliance
                for your own jurisdiction, you should contact a qualified
                accountant.
              </p>
              <a href="" className="btnleft">
                Read More
              </a>
            </div>
            <hr />
            <div className="titlecol">
              <h1>Gaining visibility</h1>
              <p>
                There is a growing number of users searching for ways to spend
                their bitcoins. You can submit your business in online
                directories to help them easily find you. You can also display
                the Bitcoin logo on your website or your brick and mortar
                business.
              </p>
              <a href="" className="btnleft">
                Submit your business
              </a>
            </div>
          </Col>
          <Col>
            <Row style={{justifyContent:'center'}}>
              <img
                src="/bank.png"
                className="Rowimg"
                alt="photo"
              ></img>
            </Row>
            <Row style={{justifyContent:'center'}}>
              <img
                src="/bitcoincash.png"
                className="Rowimg"
                alt="photo"
              ></img>
            </Row>
            <Row style={{justifyContent:'center'}}>
              <img
                src="https://img.freepik.com/free-vector/modern-bitcoin-design_1035-9520.jpg?w=2000"
                className="Rowimg"
                alt="photo"
              ></img>
            </Row>
          </Col>
        </Row>

        <br />
        <br />
      </Container>
    </div>
  );
};

export default mainindex;
