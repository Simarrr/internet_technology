import React, {useState} from 'react';
import classes from './FormEdit.module.css'
import Input from "../Input/Input";
import Button from "../Button/Button";
import SecondService from "../../API/Second";
import {second_form_first, second_form_second, second_form_third} from "../../constants";

const FormEdit = (props) => {
    const [first, setFirst] = useState(props.body.place)
    const [second, setSecond] = useState(props.body.cargo)




    async function add() {
        const req_data = {
            place: first,
            cargo: second
        }
        await SecondService.edit(props.id, req_data)
        const data = await SecondService.list(props.firstId)
        props.setItems(data)
        props.setModalVisible(false)
    }

    function listId(element, index, array) {
        const id = props.firstId

        return element.id === id
    }


    if(props.itemList.length != 0) {
        return (
            <div className={classes.container}>
                <header>Введите {second_form_first}</header>
                <Input placeholder={props.body.place} onChange={(e) => {
                    setFirst(e.target.value)
                }}/>
                {
                    props.itemList.find(listId).boat_type == "freight" &&
                    <header>Введите {second_form_second}</header>}
                {
                    props.itemList.find(listId).boat_type == "freight" &&
                    <Input placeholder={props.body.cargo} onChange={(e) => {
                        setSecond(e.target.value)
                    }}/>}
                <div className={classes.buttonContainer}>
                    <Button name={"Сохранить"} onClick={() => {
                        add()
                    }}/>
                    <Button name={"Закрыть"} onClick={() => {
                        props.setModalVisible(false)
                    }}/>
                </div>
            </div>
        );
    } else return null
};

export default FormEdit;
