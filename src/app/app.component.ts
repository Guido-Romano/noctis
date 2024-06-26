import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Noctis';

  constructor(private translate: TranslateService) {
    // Configurar idiomas disponibles y el idioma predeterminado
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
}

cambiarIdioma(idioma: string) {
    this.translate.use(idioma);
}

}
