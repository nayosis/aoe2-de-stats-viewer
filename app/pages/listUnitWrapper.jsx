import React from "react";
import { Table, Tag, Card } from 'antd';
import {
    Link
} from "react-router-dom";
import unitsData from "../data/units.json"
import Attack from "../components/attack";
import Defense from "../components/defense";
import Category from "../components/category";
import BonusAttack from "../components/bonusAttack";
const { Column, ColumnGroup } = Table;

  

  


const ListUnitWrapper = () => {


    return (
        <Card >
        <Table dataSource={unitsData}>

        <Column title="name" dataIndex="name" key="name" 
          render= {(text, record) => <Link to={"/units/"+record.id}>{text}</Link>}
          />
        <ColumnGroup title="statistics base">
          <Column title="Attack" 
          dataIndex="stats" 
          key="stats"
          render={stats => (<Attack attack={stats.attack}/>)}
              />
          <Column title="defense" 
          dataIndex="stats" 
          key="stats"
          render={stats => (
              <span>
                  {stats.defense.filter( def => def.type === "melee")
                  .map(def => {
                      return ( <Defense defense={def} /> ) 
                  })}
                  {stats.defense.filter( def => def.type === "pierce")
                  .map(def => {
                      return ( <Defense defense={def} /> ) 
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
                    <Category id={category}/>
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
                               <BonusAttack bonusAttack={bonu}/>
                           )
                       })}
                    </span>
                )
              
              }
              />
      </Table>

      </Card>
    )
    
}


export default ListUnitWrapper