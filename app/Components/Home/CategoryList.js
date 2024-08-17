import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'

export default function CategoryList() {
    const categoryList=[
        {
            id:1,
            name:"Gaz Station",
            value:"gas_station",
            icon:require("../../../assets/images/gas.png")
        },
        {
            id:2,
            name:"Restaurants",
            value:"restaurant",
            icon:require("../../../assets/images/food.png")
        },
        {
            id:3,
            name:"Cafe",
            value:"cafe",
            icon:require("../../../assets/images/cafe.png")
        }
    ]
  return (
    <View style={{marginTop:15}}>
        <Text style={{
            fontSize:20,
        }}>
            Choisissez les meilleurs catégories
        </Text>

        <FlatList
            data={categoryList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>console.log(item.name)}>
                    <CategoryItem category={item}/>
                </TouchableOpacity>
            )}
        />
    </View>
  )
}