import React from 'react';
const Tablefield = ({ fieldname, settingsfield, removeBook, editbook }) => {
    return (
        <div className="tableField">
            {fieldname}
            {settingsfield && <>
                <i onClick={editbook} className="far fa-edit"></i>
                <i onClick={removeBook} className="fas fa-trash"></i> </>}

        </div>
    )
}

export default Tablefield