# WeakPoint with MEAN

Use tinyMCE create and presentation.

## Collection Design

### user
_id
username(str)
password

### presentation(Its multiple slide)
_id
slides-title(str)
privilege(array, public = -1 or user-id)
whocansee(array)
whocanedit
creator{user-id}

### single-slide
_id
slide-title(str)
slide-content(str, HTML)
sequence(int, unique)
presentation_id
last-editor{user-id} 

## Front End Design
One App
Two Stage(View, Edit)

if ( !islogin ) {
    View {
        button {
                pre: if (seq-id == 0) {
                    disable
                } ,
                next: (seq-id == seq.length) {
                    disable
                }
            }
        }
} else {
    Edit {
        Edit,
        Preview(like view, add one Edit button)
    }
}

## Controllor Design
[GET] slide
[POST] slide
[DELETE] slide
[PATCH] slide

[GET] presentation
[POST] presentation
[DELET] presentation
[PATCH] presentation