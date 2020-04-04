import React from "react";
import { Table, Tag } from 'antd';

import { GiBroadsword , GiArrowhead, GiArrowsShield, GiCheckedShield} from "react-icons/gi";

import unitsData from "../data/units.json"
import Attack from "../components/attack";
import Defense from "../components/defense";
import Category from "../components/category";
import BonusAttack from "../components/bonusAttack";
const { Column, ColumnGroup } = Table;
const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
        title: 'categories',
        key: 'categories',
        dataIndex: 'categories',
        render: categories => (
          <span>
            {categories.map(category => {
              let color = category.length > 5 ? 'geekblue' : 'green';
              if (category === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={category}>
                  {category}
                </Tag>
              );
            })}
          </span>
        ),
      },
  ];
  

  


const ListUnitWrapper = () => {


    return (

        <Table dataSource={unitsData}>
        <Column title="id" dataIndex="id" key="id" />
        <Column title="name" dataIndex="name" key="name" />
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


    )
    
}


export default ListUnitWrapper