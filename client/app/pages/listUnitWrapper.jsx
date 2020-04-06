import React, { useState } from "react";
import { Card, Row, Col, PageHeader, Select } from 'antd';
import {
  Link,
  useHistory
} from "react-router-dom";
import { intersection } from 'lodash'
import { getAllUnits } from "../services/unitService";
import UnitResume from "../components/unitResume";
import { getAllCaegories } from "../services/categoryService";
const { Option } = Select;



const ListUnitWrapper = () => {


  function handleChange(listCatFilter) {
    console.log(listCatFilter.length)
    if (listCatFilter.length !== 0) {
      const tempo = unitsData.filter(unit => {
        return (intersection(listCatFilter, unit.categories).length !== 0)
      })
      setFilteredUnit(tempo)
    }
    else {
      setFilteredUnit(unitsData)
    }

  }

  const history = useHistory()
  const unitsData = getAllUnits()
  const [filteredUnit, setFilteredUnit] = useState(unitsData)

  const categories = getAllCaegories()
  return (
    <React.Fragment>

      <Card >
        <PageHeader
          onBack={() => history.push("/")}
          title="Liste des unités"
          subTitle="information "
        />

        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="select Type Of Unit"
          defaultValue={[]}
          onChange={handleChange}
          optionLabelProp="label"
        >
          {categories.map(cat => {
            return (
              <Option key={cat.class} value={cat.class} label={cat.label}>
                {cat.label}
              </Option>
            )
          })}


        </Select>
        <Row gutter={[16, 24]}>
          <Col span={24}>
              Nombre d'unités : {filteredUnit.length}
          </Col>
        </Row>
        <Row gutter={[16, 24]}>
          {filteredUnit.map(unit => {
            return (
              <Col key={unit.id} xs={24} sm={18} md={12} lg={8} xl={6}>
                <UnitResume unit={unit} />
              </Col>
            )
          }
          )
          }

        </Row>
      </Card>
    </React.Fragment>

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