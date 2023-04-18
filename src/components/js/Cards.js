import React from 'react';
import Card from 'terra-card';
import Header from 'terra-clinical-header';
import CollapsibleMenu from './CollapsibleMenu';
import Footer from './ActionFooter';
import styles from '../scss/CardPaddingHR.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Cards (props) {
    return (
    <Card variant='raised'>
        <Header
        title={props.title}
        endContent={props.titleEndContent === 'collapsibleMenu' ? <CollapsibleMenu/> : ''}
        />
        {props.horizontalLine === true ? 
        <>
            <Card.Body hasPaddingHorizontal>
                {props.upperContent}
            </Card.Body>
            <hr className={cx('horizontal-rule')} />
            <Card.Body hasPaddingHorizontal>
                {props.lowerContent}
            </Card.Body>
        </>
        : 
        <Card.Body hasPaddingHorizontal>
            {props.content}
        </Card.Body>
        }
        <Footer/>
    </Card>)
}

export default Cards;