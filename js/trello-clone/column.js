const Column = {
    idCounter: 4,
    dragged: null,

    process (columnElement) {
        const spanAction_addNote = columnElement.querySelector('[data-action-addNote]')
        
        spanAction_addNote.addEventListener('click', function(event) {
            const noteElement = Note.create()

            columnElement.querySelector('[data-notes]').append(noteElement)
                
            noteElement.setAttribute('contenteditable', 'true')
            noteElement.focus()
        })
    
        const headerElement = columnElement.querySelector('.column-header')
    
        headerElement.addEventListener('dblclick', function(event) {
            headerElement.setAttribute('contenteditable', 'true')
            noteElement.focus()
        })
    
        headerElement.addEventListener('blur', function(event) {
            headerElement.removeAttribute('contenteditable')
        })
    
        columnElement.addEventListener('dragstart', Column.dragstart)    
        columnElement.addEventListener('dragend', Column.dragend)

        columnElement.addEventListener('dragenter', Column.dragenter)    
        columnElement.addEventListener('dragover', Column.dragover)    
        columnElement.addEventListener('dragleave', Column.dragleave)
          
        columnElement.addEventListener('drop', Column.drop)
    },

    create (id = null) {
        const columnElement = document.createElement('div')
        columnElement.classList.add('column')
        columnElement.setAttribute('draggable', 'true')

        if (id) {
            columnElement.setAttribute('data-column-id', id)
        }
        else {
            columnElement.setAttribute('data-column-id', Column.idCounter)
            Column.idCounter++
        }

        columnElement.innerHTML = `
            <p class="column-header" contenteditable="true">В плане</p>
            <div data-notes>
            </div>
            <p class="column-footer">
                <span data-action-addNote class="action">+ Добавить карточку</span>
            </p>`
            
        Column.process (columnElement)

        return columnElement
    },

    dragstart (event) {
        Column.dragged = this
        Column.dragged.classList.add('dragged')

        // event.stopPropagation()

        document.querySelectorAll('.note').forEach(noteElement => noteElement.removeAttribute('draggable'))
    },
    
    dragend (event) {
        this.classList.remove('dragged')
        Column.dragged = null

        document.querySelectorAll('.note').forEach(noteElement => noteElement.setAttribute('draggable', true))
        
        Application.save()
        // event.stopPropagation()
    },

    dragenter (event) {
        if (!Column.dragged || Column.dragged === this) {
            return
        }

        this.classList.add('under')
    },
    
    dragover (event) {
        event.preventDefault()
        
        if (!Column.dragged || Column.dragged === this) {
            return
        }
    },
    
    dragleave (event) {
        if (!Column.dragged || Column.dragged === this) {
            return
        }

        // if (document.querySelector('.row')) {как показать что курсор ушел именно со всей колонки?
            this.classList.remove('under')
        // }
    },


    dragover (event) {
        event.preventDefault()
    },

    drop () {
        if (Note.dragged) {
            return this.querySelector('[data-notes]').append(Note.dragged)
        }
        else if (Column.dragged) {
            const children = Array.from(document.querySelector('.columns').children)
            const indexA = children.indexOf(this)
            const indexB = children.indexOf(Column.dragged)

            if (indexA < indexB) {
                document.querySelector('.columns').insertBefore(Column.dragged, this)
            }
            else {
                document.querySelector('.columns').insertBefore(Column.dragged, this.nextElementSibling)
            }
        }
    }
}