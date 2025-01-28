import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.loadApp1()
    this.loadApp2()
    document.body.classList.remove('fullscreen');



  }
  @ViewChild('app1', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  @ViewChild('app2', { read: ViewContainerRef })
  viewContainer2!: ViewContainerRef;
  async loadApp1(): Promise<void> {
    document.body.classList.remove('fullscreen');
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component',
    });

    const ref = this.viewContainer.createComponent(m.HomeComponentApp1);

  }

  async loadApp2(): Promise<void> {
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './Component',
    });

    const ref = this.viewContainer2.createComponent(m.HomeComponentApp2);
  }
}
