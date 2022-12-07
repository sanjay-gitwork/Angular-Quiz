import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importing the two components 
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [

// setting the path of the component
	{path: "", redirectTo:"welcome", pathMatch:"full"},
	{path: "welcome", component:WelcomeComponent},
	{path: "question", component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
