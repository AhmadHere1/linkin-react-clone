
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import './Widgets.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("React is back", "Top news - 999 readers")}
            {newsArticle("Coronavirus: UK updates", "Top news - 886 readers")}
            {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
            {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
            {newsArticle("Is Redux too good?", "Code - 123 readers")}
            {newsArticle("React is back", "Top news - 999 readers")}
            {newsArticle("Coronavirus: UK updates", "Top news - 886 readers")}
        </div>
    )
}

export default Widgets