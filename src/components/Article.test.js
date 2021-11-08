import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen, waitFor} from '@testing-library/react';

const testArticle = {
    id:1,
    article: "testArticle",
    delete: "delete!",
    handleEditSelect: "handleEditSelect",
    headline: "testHeadLine",
    author: "testAuthor"
}

test('renders component without errors', ()=> {
    render(<Article key={testArticle.id} article={testArticle.article} handleDelete={testArticle.handleDelete} handleEditSelect={testArticle.handleEditSelect}/>);
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article headLine={testArticle.headLine} author={testArticle.author}/>);

    const headLine = screen.queryByText(/testHeadline/i);
    expect(headLine).toBeInTheDocument();
    expect(headLine).toBeTruthy();
    expect(headLine).toHaveTextContent("testHeadLine");

    const author = screen.queryByText(/testAuthor/i);
    expect(author).toBeInTheDocument;
    expect(author).toBeTruthy;
    expect(author).toHaveTextContent(/testHeadLine/i);

});

test('renders "Associated Press" when no author is given', ()=> {
});

test('executes handleDelete when the delete button is pressed', ()=> {
    render(<Article/>);
    await waitFor(() => {
        const deleteButton = screen.getByRole('button');
        userEvent.click(deleteButton);
        expect(handleDelete).toHaveBeenCalled();
    })
});

//Task List:
//1. Complete all above tests. Create test article data when needed.