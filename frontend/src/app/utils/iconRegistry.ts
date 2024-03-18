import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * registro de iconos
 * https://github.com/Templarian/MaterialDesign-SVG
 */
export class IconRegistry {

  /**
   * list of icons name
   * path /assets/icons/[name].svg
   */
  // tslint:disable-next-line: quotemark
  static readonly ICONS = ['add_candidate', 'add_search', 'bell-ring-outline', 'bell-outline', 'book', 'campaign', 
    'chat', 'check', 'clock', 'close', 'dashboard', 'delete', 'download', 'duplicate', 'edit', 'exit', 'factory',
    'folder_shared', 'local_pharmacy', 'mail', 'notifications_off', 'open_in', 'open_new', 'open_recipe', 'pause',
    'person_white', 'person', 'receipt_long', 'reply', 'search', 'search_new', 'select', 'settings', 'thumb_down_alt',
    'undo', 'view',
  ];

  /**
   * registra la lista de iconitos custom
   * @param registry
   * @param sanitizer
   */
  static registryCustomIcons(registry: MatIconRegistry, sanitizer: DomSanitizer): void {
    this.ICONS.forEach(icon =>
      registry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/' + icon + '.svg')));
  }



}
