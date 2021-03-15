import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CrudService } from './services/crud.service';
import { NavbarComponent } from './Module/navbar/navbar.component';
import { StudentDeatilsComponent } from './Module/Student/student-deatils/student-deatils.component';
import { AddStudentComponent } from './Module/Student/add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentDeatilsComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule    
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
