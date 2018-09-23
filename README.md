# Hello Mermaid

Accompanying repo to the blog.

[See the original blog post](https://www.dennisokeeffe.com/blog/diagrams-with-mermaid)

## Quick start

```
yarn install
yarn start
```

## Usage

Copy paste in the below into the textarea to see the changes.

![Initial app](https://res.cloudinary.com/gitgoodclub/image/upload/v1537746495/hlhp7gcpqov7bynrs6nj.png 'Initial app')

Great! Now thanks to our `handleChange` function and graceful handling, we can also dynamically update the chart on the fly.

I've added a few examples from the web that you can now copy and paste into our text box to see how it works!

```
graph LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
```

![Graph](https://res.cloudinary.com/gitgoodclub/image/upload/v1537746496/uvxm9akwbfhd7p7jqllj.png 'Graph')

```
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!
```

![Sequence diagram](https://res.cloudinary.com/gitgoodclub/image/upload/v1537746496/xw34lkevrva04sib3yt0.png 'Sequence diagram')

```
gantt
       dateFormat  YYYY-MM-DD
       title Adding GANTT diagram functionality to mermaid

       section A section
       Completed task            :done,    des1, 2014-01-06,2014-01-08
       Active task               :active,  des2, 2014-01-09, 3d
       Future task               :         des3, after des2, 5d
       Future task2              :         des4, after des3, 5d

       section Critical tasks
       Completed task in the critical line :crit, done, 2014-01-06,24h
       Implement parser and jison          :crit, done, after des1, 2d
       Create tests for parser             :crit, active, 3d
       Future task in critical line        :crit, 5d
       Create tests for renderer           :2d
       Add to mermaid                      :1d

       section Documentation
       Describe gantt syntax               :active, a1, after des1, 3d
       Add gantt diagram to demo page      :after a1  , 20h
       Add another diagram to demo page    :doc1, after a1  , 48h

       section Last section
       Describe gantt syntax               :after doc1, 3d
       Add gantt diagram to demo page      :20h
       Add another diagram to demo page    :48h
```

![Gantt](https://res.cloudinary.com/gitgoodclub/image/upload/v1537746497/cjsznl54jbf1qhsxdhfg.png 'Gantt chart')
