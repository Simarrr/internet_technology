import React, {useState} from 'react';
import classes from './FormAddItem.module.css'
import Input from "../Input/Input";
import Button from "../Button/Button";
import FirstService from "../../API/First";
import SecondService from "../../API/Second";
import {second_form_first, second_form_second, second_form_third} from "../../constants";

const FormAddItem = (props) => {
    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")


    async function add() {
        const data = {
            place: first,
            cargo: second,
            fk: props.itemId
        }
        await SecondService.create(data, props.itemId)
        const res = await FirstService.GetFirstList()
        props.setItemList([])
        props.setItemList(res)
        props.setModalVisible(false)
    }

    function listId(element, index, array) {
        const id = props.itemId

        return element.id === id
    }

    if(props.itemList.length != 0){
    return (

        <div className={classes.container}>
            <header>Введите {second_form_first}</header>
            <Input onChange={(e) => {setFirst(e.target.value)}}/>
            {
                props.itemList.find(listId).boat_type == "freight" &&
                <header>Введите {second_form_second}</header>}
            { props.itemList.find(listId).boat_type == "freight" &&
                <Input onChange={(e) => {setSecond(e.target.value)}}/>
            }

            <div className={classes.buttonContainer}>
                <Button name={"Создать"} onClick={() => {add()}}/>
                <Button name={"Закрыть"} onClick={() => {props.setModalVisible(false)}}/>
            </div>
        </div>

    );
        } else return null
};

export default FormAddItem;
