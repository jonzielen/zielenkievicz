<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2014 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class IndexController extends AbstractActionController
{
    public function indexAction()
    {
        $this->bodyId('homepage');
        return new ViewModel();
    }

    public function sitesAction()
    {
        $this->bodyId('sites');
        return new ViewModel();
    }

    public function responsiveAction()
    {
        $this->bodyId('responsive');
        return new ViewModel();
    }

    public function landingPagesAction()
    {
        $this->bodyId('landing-pages');
        return new ViewModel();
    }

    public function htmlEmailsAction()
    {
        $this->bodyId('html-emails');
        return new ViewModel();
    }

    public function linksAction()
    {
        $this->bodyId('links');
        return new ViewModel();
    }

    public function bodyId($bodyID) {
      return $this->layout()->setVariable('bodyID', $bodyID);
    }

}
