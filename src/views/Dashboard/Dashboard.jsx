import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Notifications from "@material-ui/icons/Notifications";
import DateRange from "@material-ui/icons/DateRange";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart as dailySalesChart1,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.1.jsx";

import {
  dailySalesChart as dailySalesChart2,
} from "variables/charts.2.jsx";

import {
  dailySalesChart as dailySalesChart3,
} from "variables/charts.3.jsx";

import {
  dailySalesChart as dailySalesChart4,
} from "variables/charts.4.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Pending signatures</p>
                <h3 className={classes.cardTitle}>
                  3/217
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Notifications />
                  Send notification
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Revenue</p>
                <h3 className={classes.cardTitle}>108 245 NOK</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last week
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Total Users</p>
                <h3 className={classes.cardTitle}>10 567</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  All time
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>trending_up</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>New Users</p>
                <h3 className={classes.cardTitle}>+245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last week
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart1.data}
                  type="Line"
                  options={dailySalesChart1.options}
                  listener={dailySalesChart1.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Partition 1</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowDownward className={classes.upArrowCardCategory} /> 0.20%
                  </span>{" "}
                  decrease in interest.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart2.data}
                  type="Line"
                  options={dailySalesChart2.options}
                  listener={dailySalesChart2.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Partition 2</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowDownward className={classes.upArrowCardCategory} /> 0.09%
                  </span>{" "}
                  decrease in interest.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 20 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart3.data}
                  type="Line"
                  options={dailySalesChart3.options}
                  listener={dailySalesChart3.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Partition 3</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowDownward className={classes.upArrowCardCategory} /> 0.05%
                  </span>{" "}
                  decrease in interest.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 8 hours ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="info">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart4.data}
                  type="Line"
                  options={dailySalesChart4.options}
                  listener={dailySalesChart4.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Partition 4</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowDownward className={classes.upArrowCardCategory} /> 0.17%
                  </span>{" "}
                  decrease in interest.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="primary">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>User increase</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
