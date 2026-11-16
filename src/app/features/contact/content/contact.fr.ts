import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';
import { ContactFormDirective } from '../contact-form.directive';
import { FaqToggleDirective } from '../faq-toggle.directive';

/** Contenu de la page « Contact » (FR). Le contenu se modifie dans `contact.fr.html`, son style dans `contact.fr.css`. */
@Component({
  selector: 'app-contact-fr',
  imports: [CONTENT_IMPORTS, ContactFormDirective, FaqToggleDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.fr.html',
  styleUrl: './contact.fr.css',
})
export class ContactFr {}
