import { is } from 'cheerio/lib/api/traversing';
import React from 'react'

const Form = (props) => {
    const { title,
        setTitle,
        author,
        isbn,
        setAuthor,
        setIsbn,
        currentbookid, handleSubmit, canceledit } = props;
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label class="animate__animated animate__fadeInDown animate__delay-2s">Title</label>
                <input class="animate__animated animate__fadeInUp animate__delay-2s" onFocus required type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                <label class="animate__animated animate__fadeInDown animate__delay-2s">Author</label>
                <input class="animate__animated animate__fadeInUp animate__delay-2s" type="text" value={author} onChange={(e) => { setAuthor(e.target.value) }} />
                <label class="animate__animated animate__fadeInDown animate__delay-2s">Isbn Number</label>
                <input class="animate__animated animate__fadeInUp animate__delay-2s" type="text" value={isbn} onChange={(e) => { setIsbn(e.target.value) }} />
                <button tabIndex="0" type="submit">{currentbookid !== null ? "Update" : "Add"}</button>
                {currentbookid !== null && <button onClick={canceledit}>cancel</button>}
            </form>
        </div>
    )
}
export default Form