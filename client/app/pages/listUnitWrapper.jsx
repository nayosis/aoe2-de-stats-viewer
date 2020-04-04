import React from "react";
import { Table, Card, Row, Col } from 'antd';
import {
  Link
} from "react-router-dom";

import Attack from "../components/attack";
import Defense from "../components/defense";
import Category from "../components/category";
import BonusAttack from "../components/bonusAttack";
import { getAllUnits } from "../services/unitService";
import UnitResume from "../components/unitResume";
const { Column, ColumnGroup } = Table;


const ListUnitWrapper = () => {

  const unitsData = getAllUnits()

  return (
    <Card >
      <Row gutter={[16, 24]}>
    

      {unitsData.map( unit => {
        return (
          <Col xs={24} sm={18} md={12} lg={8} xl={6}>
            <UnitResume key= {unit.id} unit={unit} />
            </Col>
        )
      }
      ) 
       }

    </Row>
    </Card>
  )

}


export default ListUnitWrapper

//  <pre>{JSON.stringify(unitsData,null,4)}</pre>


/*


 <Table dataSource={unitsData}>

        <Column title="name" dataIndex="name" key="name"
          render={(text, record) => <Link to={"/units/" + record.id}>{text}</Link>}
        />
        <ColumnGroup title="statistics base">
          <Column title="Attack"
            dataIndex="stats"
            key="stats"
            render={stats => (<Attack attack={stats.attack} />)}
          />
          <Column title="defense"
            dataIndex="stats"
            key="stats"
            render={stats => (
              <span>
                {stats.defense.filter(def => def.type === "melee")
                  .map(def => {
                    return (<Defense defense={def} />)
                  })}
                {stats.defense.filter(def => def.type === "pierce")
                  .map(def => {
                    return (<Defense defense={def} />)
                  })}
              </span>
            )
            }
          />
        </ColumnGroup>

        <Column
          title="categories"
          dataIndex="categories"
          key="categories"
          render={categories => (
            <span>
              {categories.map(category => {
                return (
                  <Category id={category} />
                );
              })}
            </span>
          )}
        />
        <Column title="bonus" dataIndex="bonus" key="bonus"
          render={bonus => (

            <span>
              {bonus.map(bonu => {
                return (
                  <BonusAttack bonusAttack={bonu} />
                )
              })}
            </span>
          )

          }
        />
      </Table>*
      */