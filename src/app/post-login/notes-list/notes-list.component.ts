import { Component, OnInit } from '@angular/core';

import { NotesList } from '../../../assets/Data/notes';
import { Notes } from '../../modals/interfaces';
@Component({
    selector: 'app-notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
    public notesResponse: Notes[];
    public showActionFlag: boolean;
    private isEditFlag: boolean;
    private index: number;
    public lastUpdate: any;
    public lastNoteUpate: string;
    public showSummaryFlag: boolean;
    public createNotes: Notes = {
        id: null,
        title: null,
        description: null,
        dateTime: null,
    };
    constructor() {}

    ngOnInit(): void {
        this.isEditFlag = false;
        this.noteList();
    }

    // show note list
    public noteList() {
        this.showActionFlag = false;
        this.notesResponse = NotesList;
        this.lastUpdate = this.notesResponse[this.notesResponse.length - 1].dateTime;
        this.lastNoteUpate = this.notesResponse[this.notesResponse.length - 1].title;
    }
    // edit note function
    public editnote(index: number) {
        this.isEditFlag = true;
        this.showActionFlag = true;
        this.index = index;
        this.createNotes.title = this.notesResponse[this.index].title;
        this.createNotes.description = this.notesResponse[this.index].description;
        this.createNotes.id = this.notesResponse[this.index].id;
    }
    // delete note
    public deletenote(index: number) {
        this.notesResponse.splice(index, 1);
    }
    // add new note
    public addnote() {
        this.showActionFlag = true;
    }
    public onSubmit() {
        this.lastNoteUpate = this.createNotes.title;
        const tempDate = new Date();
        this.createNotes.dateTime = this.lastUpdate = tempDate;
        if (!this.isEditFlag) {
            this.createNotes.id = this.notesResponse.length + 1;
            this.notesResponse.push(this.createNotes);
            console.log(this.notesResponse);
        } else if (this.isEditFlag) {
            this.notesResponse[this.index] = this.createNotes;
            console.log(this.notesResponse);
        }
        this.showActionFlag = false;
        this.isEditFlag = false;

        this.createNotes = {
            id: null,
            title: null,
            description: null,
            dateTime: null,
        };
    }
    public closeNoteForm() {
        this.showActionFlag = false;
        this.createNotes = {
            id: null,
            title: null,
            description: null,
            dateTime: null,
        };
    }
    public showSummary(isOpen) {
        if (isOpen) {
            this.showSummaryFlag = true;
        } else {
            this.showSummaryFlag = false;
        }
    }
}
