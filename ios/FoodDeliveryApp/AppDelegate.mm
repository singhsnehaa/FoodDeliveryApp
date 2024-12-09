#import "AppDelegate.h"
#import "RNSplashScreen.h" 

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [GMSServices provideAPIKey:@"AIzaSyAFpfFxmiIRbuAgXpxYNp0uGOSspPq-a0w"];
  UIView *rootView = RCTAppSetupDefaultRootView(bridge, @"FoodDeliveryApp", nil);
  self.moduleName = @"FoodDeliveryApp";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};


  
  BOOL ret = [super application:application didFinishLaunchingWithOptions:launchOptions]; if (ret == YES) {
        [RNSplashScreen show];   //Spash screen
      }
  return ret;
   
//  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
