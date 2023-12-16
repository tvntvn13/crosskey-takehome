### Crosskey Take-home

---

##### Instructions:

> TL;DR - Do something nice with the API response using Angular!
>
> API: https://ivarpivar.netlify.app/api
>
> Longer-version:
>
> We have a task for you that involves utizing Angular and an API to create a
> page that displays a list of funds. The API provides all the necessary data,
> and you can use your Angular expertise to present the information in an
> organized and easy-to-read manner. Each item in the list will contain a
> substantal amount of data, including information such as fund performance and
> other relevant details. However, the only mandatory fields that need to be
> displayed are the fund's name and its performance over 1 month, 3 months, and
> 3 years (as represented by the "change1m," "change3m," and "change3y" fields,
> respectively). The primary focus of this task is to see how you tackle the
> technical aspects of the project, such as accessing and manipulating data from
> the API and displaying it appropriately. While we don't expect you to spend an
> excessive amount of time on design aesthetics, we do hope to see some thought
> put into the layout and organization of the information on the page. Overall,
> we're looking forward to seeing your approach and creativity in completing
> this task! We expect the result to be reachable from some git repository with
> commit history – so when you’re done you can simply send us a link to that
> repository. Good luck!

---

##### Approach:

_**simple, usable, easy on the eyes**_
<br>
<br> Fetch the data, create component for the individual card, create container
component for looping through the api response. Loop through the data, create
cards, display relevant data, add placeholders for null values or conditional
checks for rendering. Add search bar component for filtering through the data.
Add debounce for limiting the amount of requests the search bar triggers. Make
it look presentable. Build, deploy, write a README. Turn in the assignement.

##### Result:

- [Final product](https://takehome-ba415.web.app/home)

---

##### Running locally:

```bash
git clone https://github.com/tvntvn13/crosskey-takehome.git
cd crosskey-takehome
npm install
npm start
```

this will start the dev-server at http://localhost:4200
<br> _(if it fails to start the dev-server, might need to
`npm install @angular/cli`)_
