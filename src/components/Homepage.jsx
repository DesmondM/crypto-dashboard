import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10); // this is a custom hook
  const globalData = data?.data?.stats;
  const globalData2 = data?.data?.coins;
  console.log(data);
  console.log("Global stats ", globalData);
  console.log("Global stats 2 ", globalData2);
  if (isFetching) return "Loading...";
  return (
    <>
      <Title level={2} className="heading">
        Crypto currencies
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Crypto currencies"
            value={globalData?.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalData?.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market gap"
            value={millify(globalData?.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalData?.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={globalData?.totalMarkets} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more...</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={true} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show more...</Link>
        </Title>
      </div>

      <News simplified={true} />
    </>
  );
};

export default Homepage;
