import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTENT_IMPORTS } from '@shared/content/content-imports';
import { ContactFormDirective } from '../contact-form.directive';
import { FaqToggleDirective } from '../faq-toggle.directive';

/** Contenu de la page « Contact » (EN). Le contenu se modifie dans `contact.en.html`, son style dans `contact.en.css`. */
@Component({
  selector: 'app-contact-en',
  imports: [CONTENT_IMPORTS, ContactFormDirective, FaqToggleDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.en.html',
  styleUrl: './contact.en.css',
})
export class ContactEn {}
