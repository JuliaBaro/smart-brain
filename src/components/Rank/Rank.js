import React from 'react';

const Rank = ({name, entries}) => 
{
    return (
        <div>
            {/*<div className='white f3'>
                {'Andrei, your current rank is...'}
            </div>*/}
            {`${name} , your current entry count is...`}
            <div className='white f1'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;