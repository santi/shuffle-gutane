import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import data from "assets/data/fintech";


const numberWithSpaces = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");


const mapToFields = (person) => {
  return {
    age: person.Alder,
    income: numberWithSpaces(person.Lønn),
    loan: numberWithSpaces(person.Lån),
    capital: numberWithSpaces(person.Aksjekapital + person.Fondkapital + person["Verdi på bolig"]),
  }
} 

const mapToTable = ({age, income, loan, capital}) => [
  `${age}`,
  `${income} NOK`,
  `${loan} NOK`,
  `${capital} NOK`,
]

const bolk1 = data.filter(person => person.Bolk === 1).map(mapToFields).map(mapToTable)

const bolk2 = data.filter(person => person.Bolk === 2).map(mapToFields).map(mapToTable)
const bolk3 = data.filter(person => person.Bolk === 3).map(mapToFields).map(mapToTable)
const bolk4 = data.filter(person => person.Bolk === 4).map(mapToFields).map(mapToTable)

bolk1.push([
  "39",
  "734 375 NOK",
  "2 091 250 NOK",
  "4 238 750 NOK",
])

bolk2.push([
  "31.5",
  "785 714 NOK",
  "3 540 000 NOK",
  "4 885 714 NOK",
])


bolk3.push([
  "45.1",
  "690 000 NOK",
  "2 858 571 NOK",
  "5 857 142 NOK",
])


bolk4.push([
  "31,8",
  "625 714 NOK",
  "2 508 571 NOK",
  "4 330 000 NOK",
])

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.95)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};



function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Partition 1</h4>
          <p className={classes.cardCategoryWhite}>
            Loan less than 3.5 times income, net capital less than 50% of loan.
          </p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="primary"
            tableHead={["Age", "Income", "Loan", "Capital"]}
            tableData={bolk1}
          />
        </CardBody>
      </Card>
    </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Partition 2</h4>
            <p className={classes.cardCategoryWhite}>
              Age less than 40 years, income more than 700 000 NOK
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Age", "Income", "Loan", "Capital"]}
              tableData={bolk2}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Partition 3</h4>
            <p className={classes.cardCategoryWhite}>
              Age more than 40 years, income more than 70% of loan.
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Age", "Income", "Loan", "Capital"]}
              tableData={bolk3}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Partition 4</h4>
            <p className={classes.cardCategoryWhite}>
              Aksjekapital over 150k, formue i bolig større enn 2 ganger aksjekapitalen.
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Age", "Income", "Loan", "Capital"]}
              tableData={bolk4}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TableList);
