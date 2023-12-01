// npm i styled-components
// npm i reactstrap
// npm i react-icons

import React, { useState, useCallback } from "react";
import { MyBox, MyButton } from './css/A04CustomTag'
import { Alert, Accordion, AccordionBody, AccordionHeader, AccordionItem, Popover, PopoverHeader, PopoverBody, Button } from 'reactstrap'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, } from 'reactstrap'

import { Md3DRotation } from "react-icons/md";
import { FcAlarmClock } from "react-icons/fc";

/*
import styled from 'styled-components'

// styled-components => 기존의 HTML + CSS를 적용한 리엑트 컴퍼넌트 태그를 생성해 준다
// 이 내부는 SCSS 방식 (CSS 방식)
const MyBox = styled.div`
  background-color: lightgray;
  color: ${props => props.color || 'white'};
  font-size: ${props => props.size || '20pt'};
  font-weight: bold;
  padding: 10px;
`;
const MyButton = styled.button`
  background-color: lightgray;
  color: ${props => props.color || 'white'};
  border: 1px solid gray;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    background-color: black;
    color: white;
  }
`;
*/

function A04StyledComponent() {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) setOpen();
    else setOpen(id);
  };

  const [popOpen, setPopOpen] = useState(false);
  const changePopOpen = useCallback(() => {
    setPopOpen((popOpen) => !popOpen);
  }, []);

  return (
    <div>
      <h3>A04 Styled Component</h3>

      <Md3DRotation style={{ fontSize: '30pt', color: 'orange' }} />
      <FcAlarmClock style={{ fontSize: '30pt' }} />

      <Button id="Popover1" type="button">
        Launch Popover
      </Button>
      <Popover flip target="Popover1"
        isOpen={popOpen} toggle={changePopOpen}>
        <PopoverHeader>
          Popover Title
        </PopoverHeader>
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </PopoverBody>
      </Popover>


      <Card style={{ width: '28rem' }}>
        <CardBody>
          <CardTitle tag="h5">
            Card title
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
        </CardBody>
        <img
          alt="Card cap"
          src="https://picsum.photos/318/180"
          width="100%"
        />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          <CardLink href="#">
            Card Link
          </CardLink>
          <CardLink href="#">
            Another Link
          </CardLink>
        </CardBody>
      </Card>

      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item&#39;s accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default
            variables. It&#39;s also worth noting that just about any HTML can
            go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>


      <Alert color="danger">
        Hello World
      </Alert>

      <MyBox color="orange">
        <h5>MyBox</h5>
        <div>
          This is Content 01<br />

          <MyButton>CLICK</MyButton>
          <MyButton>SEND</MyButton>
        </div>
      </MyBox>
      <MyBox size="18pt">
        <h5>MyBox</h5>
        <div>
          This is Content 02
        </div>
      </MyBox>

      <MyButton>SEND</MyButton>
    </div>
  );
}

export default A04StyledComponent;
